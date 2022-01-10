<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        Log Time
      </v-btn>
    </template>
    <v-card :loading="loading">
      <v-card-title>
        <v-icon
          large
          color="green"
        >
          mdi-calendar-check
        </v-icon>
        <span class="text-h5 ml-2">Log Time </span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <ValidationObserver ref="observer">
            <v-row>
              <v-col cols="12">
                <ValidationProvider name="task" rules="required">
                  <template slot-scope="{ errors }">
                    <v-autocomplete
                      v-model="logtime.idTask"
                      label="Task *"
                      :items="tasks"
                      :error-messages="errors"
                      item-value="id"
                      item-text="subject"
                    />
                  </template>
                </ValidationProvider>
              </v-col>
              <v-col cols="12">
                <ValidationProvider name="type" rules="required">
                  <template slot-scope="{ errors }">
                    <v-select
                      v-model="logtime.type"
                      :items="types"
                      item-text="text"
                      item-value="value"
                      :error-messages="errors"
                      label="Type *"
                      single-line
                    />
                  </template>
                </ValidationProvider>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-menu
                  v-model="fromDateMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <ValidationProvider name="logdate" rules="required">
                      <template slot-scope="{ errors }">
                        <v-text-field
                          v-model="logtime.logdate"
                          :error-messages="errors"
                          label="Date *"
                          append-icon="mdi-calendar"
                          readonly
                          v-on="on"
                        />
                      </template>
                    </ValidationProvider>
                  </template>
                  <v-date-picker
                    locale="en-in"
                    v-model="logtime.logdate"
                    no-title
                    @input="fromDateMenu = false"
                  />
                </v-menu>
              </v-col>
              <v-col cols="12"
                sm="6"
                md="4">
                <v-menu
                  v-model="fromTimeMenuStart"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <ValidationProvider name="startTime" rules="required">
                      <template slot-scope="{ errors }">
                        <v-text-field
                          v-model="logtime.startTime"
                          :error-messages="errors"
                          label="Start *"
                          append-icon="mdi-clock-outline"
                          v-on="on"
                        />
                      </template>
                    </ValidationProvider>
                  </template>
                  <v-time-picker
                    format="ampm"
                    v-model="logtime.startTime"
                    no-title
                    @input="fromTimeMenuStart = false"
                  />
                </v-menu>
              </v-col>
              <v-col cols="12"
                sm="6"
                md="4">
                <v-menu
                  v-model="fromTimeMenuEnd"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <ValidationProvider name="endTime" rules="required">
                      <template slot-scope="{ errors }">
                        <v-text-field
                          v-model="logtime.endTime"
                          :error-messages="errors"
                          label="End *"
                          append-icon="mdi-clock-outline"
                          v-on="on"
                        />
                      </template>
                    </ValidationProvider>
                  </template>
                  <v-time-picker
                    format="ampm"
                    v-model="logtime.endTime"
                    no-title
                    @input="fromTimeMenuEnd = false"
                  />
                </v-menu>
              </v-col>
              <v-col
                cols="12"
              >
              <v-textarea
                v-model="logtime.description"
                autocomplete="description"
                label="Description"
                no-resize
              />
              </v-col>
            </v-row>
          </ValidationObserver>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          @click="dialog = false"
        >
          Cancel
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="save"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import api from "@/service/apiService";
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

extend('required', {
  ...required,
  message: 'This field is required'
});

export default {
  name: "DialogLogTime",

  components: {
    ValidationProvider,
    ValidationObserver
  },

  data: () => ({
    dialog: false,
    fromDateMenu: false,
    fromTimeMenuStart: false,
    fromTimeMenuEnd: false,
    loading: false,
    tasks: [],
    types: [
      { text: 'Default', value: 'default' },
      { text: 'Overtime', value: 'overtime' },
      { text: 'Compensatory Time', value: 'compensatory' },
    ],
    logtime: {
      type: null,
      logdate: null,
      startTime: null,
      endTime: null,
      description: null,
      idUser: 11231,
      idTask: null
    }
  }),

  watch: {
    dialog(value) {
      if(value) {
        this.resetFields()
        this.getTasks()
      }
    }
  },

  methods: {
    async getTasks() {
      this.tasks = await api.getTasks(11231)
    },

    async save() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        return
      }

      try {
        this.loading = true
        const response = await api.createLogtime(this.logtime)

        this.$dialog.notify.success(response.msg, {
          position: 'top-right',
          timeout: 5000
        })

        this.$emit('load-projects')
      } catch(error) {
        this.$dialog.notify.error(error, {
          position: 'top-right',
          timeout: 5000
        })
      } finally {
        this.loading = false
      }

      this.dialog = false
    },

    resetFields() {
      const fields = ['type', 'logdate', 'startTime', 'endTime', 'description', 'idTask']
      fields.forEach(f => this.logtime[f] = null)

      this.$nextTick(() => {
        this.$refs.observer.reset()
      })
    }
  }
};
</script>
