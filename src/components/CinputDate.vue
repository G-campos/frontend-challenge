<!--
  Chamada:
    <c-input-date :value="data" :set="(v) => { data = v }" label="Data" />
-->
<template>
    <q-input stack-label lazy-rules bottom-slots ref="input"
      v-on="$listeners"
      v-bind="$attrs"
      v-model="dataQInput"
      mask="##/##/####" hint="DD/MM/YYYY"
      :dense="dense"
      :filled="filled"
      :standout="standout"
      :borderless="borderless"
      :rounded="rounded"
      :square="square"
      :outlined="outlined"
      :error="!isValid || this.error"
      :error-message="this.error ? this.errorMessage : 'Data Inválida!'"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="popup">
            <q-date today-btn
              v-model="calendarModel"
              :default-year-month="defaultYearMonth"
            />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
</template>

<style>
</style>

<script>
import { date } from 'quasar';
export default {
  name: 'cInputDate-component',
  template: '#c-input-date-component-template',
  props: {
    value: { type: String },
    dense: { type: Boolean, default: false },
    filled: { type: Boolean, default: false },
    standout: { type: Boolean, default: false },
    borderless: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
    square: { type: Boolean, default: false },
    outlined: { type: Boolean, default: false },
    error: { type: Boolean, default: null },
    errorMessage: { type: String, default: '' }
  },
  data () {
    return {
      isValid: true,
      dataQInput: this.getData(false),
      dataQDate: this.getData(true)
    };
  },
  watch: {
    dataQInput (value) {
      this.dataQDate = null;
      this.isValid = true;
      if (value.length === 10) {
        let val = value.substr(6, 4) + '/' + value.substr(3, 2) + '/' + value.substr(0, 2);
        if (!this.$geralService.isValidDateYMD(val)) {
          this.isValid = false;
        } else {
          this.isValid = true;
          this.dataQDate = val;
        }
      } else {
        this.isValid = false;
      }
      this.updateDate();
    }
  },
  computed: {
    defaultYearMonth () {
      return date.formatDate(new Date(), 'YYYY/MM');
    },
    calendarModel: {
      get: function () {
        return this.dataQDate || '';
      },
      set: function (value) {
        if (new Date(this.dataQDate).getDate() !== new Date(value).getDate()) this.$refs.popup.hide();
        this.dataQDate = value;
        this.dataQInput = value.substr(8, 2) + '/' + value.substr(5, 2) + '/' + value.substr(0, 4);
        this.isValid = true;
      }
    }
  },
  methods: {
    focus () {
      this.$refs['input'].focus();
    },
    blur () {
      this.$refs['input'].blur();
    },
    getData (tipoQDate) {
      if (this.value !== undefined && this.value.length > 0) {
        if (tipoQDate === true) {
          return (this.value.substr(0, 4) + '/' + this.value.substr(5, 2) + '/' + this.value.substr(8, 2));
        } else {
          return (this.value.substr(8, 2) + '/' + this.value.substr(5, 2) + '/' + this.value.substr(0, 4));
        }
      } else { return undefined; }
    },
    updateDate () {
      if (this.dataQDate === null) {
        this.$emit('input', null);
      } else {
        this.$emit('input', new Date(this.dataQDate).toISOString());
      }
    }
  }
};
</script>
