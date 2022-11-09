<template>
  <VContainer class="dashboard">
    <VRow>
      <VCol>
        <VSheet class="d-flex bg-transparent">
          <div class="heading mr-auto">
            <h1 class="text-h4">Dashboard</h1>
            <h2 class="text-subtitle-1">View the health of your monitored population.</h2>
          </div>
          <div class="actions ml-4 mt-4">
            <v-btn variant="outlined" prepend-icon="mdi-export">Export</v-btn>
            <v-btn variant="outlined" prepend-icon="mdi-cog-outline" class="ml-2">Configure</v-btn>
          </div>
        </VSheet>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12" sm="12" lg="6">
        <VSheet elevation="1" rounded="lg" class="alerts-overview">
          <VContainer class="pa-0">
            <VRow no-gutters>
              <VCol cols="12" sm="7">
                <VContainer>
                  <VRow>
                    <VCol>
                      <h2 class="text-h6">Alerts Overview</h2>
                    </VCol>
                  </VRow>
                  <VRow>
                    <VCol>
                      <VSheet elevation="1" rounded color="white" class="pa-1">
                        <div class="d-flex flex-row">
                          <VSheet rounded color="#FF3333" height="52px" width="72px"
                            class="d-flex flex-column align-center justify-center mr-2">
                            <p class="text-h5 font-weight-bold">32</p>
                          </VSheet>
                          <VSheet class="d-flex flex-column justify-center mr-auto">
                            <p class="text-body-2 font-weight-bold text-no-wrap">Confirmed Match</p>
                          </VSheet>
                          <VSheet class="d-flex flex-column justify-center">
                            <VBtn variant="text" size="small" icon="mdi-help-circle-outline"></VBtn>
                          </VSheet>
                        </div>
                      </VSheet>
                    </VCol>
                  </VRow>
                  <VRow>
                    <VCol>
                      <VSheet elevation="1" rounded color="white" class="pa-1">
                        <div class="d-flex flex-row">
                          <VSheet rounded color="#FFBA33" height="52px" width="72px"
                            class="d-flex flex-column align-center justify-center mr-2">
                            <p class="text-h5 font-weight-bold">45</p>
                          </VSheet>
                          <VSheet class="d-flex flex-column justify-center mr-auto">
                            <p class="text-body-2 font-weight-bold text-no-wrap">Suspected Match</p>
                          </VSheet>
                          <VSheet class="d-flex flex-column justify-center">
                            <VBtn variant="text" size="small" icon="mdi-help-circle-outline"></VBtn>
                          </VSheet>
                        </div>
                      </VSheet>
                    </VCol>
                  </VRow>
                  <VRow>
                    <VCol>
                      <VSheet elevation="1" rounded color="white" class="pa-1">
                        <div class="d-flex flex-row">
                          <VSheet rounded color="#3399FF" height="52px" width="72px"
                            class="d-flex flex-column align-center justify-center mr-2">
                            <p class="text-h5 font-weight-bold">30</p>
                          </VSheet>
                          <VSheet class="d-flex flex-column justify-center mr-auto">
                            <p class="text-body-2 font-weight-bold text-no-wrap">Under Review</p>
                          </VSheet>
                          <VSheet class="d-flex flex-column justify-center">
                            <VBtn variant="text" size="small" icon="mdi-help-circle-outline"></VBtn>
                          </VSheet>
                        </div>
                      </VSheet>
                    </VCol>
                  </VRow>
                  <VRow>
                    <VCol>
                      <VSheet elevation="1" rounded color="white" class="pa-1">
                        <div class="d-flex flex-row">
                          <VSheet rounded color="#A0A9B5" height="52px" width="72px"
                            class="d-flex flex-column align-center justify-center mr-2">
                            <p class="text-h5 font-weight-bold">107</p>
                          </VSheet>
                          <VSheet class="d-flex flex-column justify-center mr-auto">
                            <p class="text-body-2 font-weight-bold text-no-wrap">Total Open Alerts</p>
                          </VSheet>
                          <VSheet class="d-flex flex-column justify-center">
                            <VBtn variant="text" size="small" icon="mdi-help-circle-outline"></VBtn>
                          </VSheet>
                        </div>
                      </VSheet>
                    </VCol>
                  </VRow>
                </VContainer>
              </VCol>
              <VCol cols="12" sm="5">
                <VContainer>
                  <VRow>
                    <VCol>
                      <h2 class="text-h6 text-center">Overall Compliance Score</h2>
                    </VCol>
                  </VRow>
                  <VRow class="my-6">
                    <VCol class="text-center">
                      <v-progress-circular model-value="78" :size="180" :width="22" color="primary">
                        <div class="d-flex flex-column">
                          <div class="text-h3 text-black">78%</div>
                          <div>
                            <VChip size="small" color="green700">
                              <VIcon icon="start mdi-arrow-up" size="sm"></VIcon>
                              2%
                            </VChip>
                          </div>
                        </div>
                      </v-progress-circular>
                    </VCol>
                  </VRow>
                  <VRow>
                    <VCol class="text-center">
                      <VBtn variant="text" size="small">How is my score calculated?</VBtn>
                    </VCol>
                  </VRow>
                </VContainer>
              </VCol>
            </VRow>
          </VContainer>
        </VSheet>
      </VCol>
      <VCol cols="12" sm="6" lg="3">
        <VContainer class="pa-0">
          <VRow>
            <VCol>
              <VSheet class="pt-card small accent-top" color="white" rounded="lg" elevation="1">
                <VContainer class="pa-0">
                  <VRow no-gutters>
                    <VCol cols="auto" class="d-flex flex-column align-center justify-center mx-3">
                      <div class="icon-bg bg-ptblue100 d-flex flex-column align-center justify-center">
                        <VIcon icon="mdi-account-group-outline" color="primary"></VIcon>
                      </div>
                    </VCol>
                    <VCol cols="auto" class="d-flex flex-column justify-center mr-auto">
                      <p class="text-body-2">Total Population</p>
                      <p class="text-h6">45,678</p>
                    </VCol>
                    <VCol cols="auto">
                      <div class="d-flex flex-column">
                        <VBtn variant="text" size="small" icon="mdi-dots-vertical"></VBtn>
                        <VBtn variant="text" size="small" icon="mdi-help-circle-outline"></VBtn>
                      </div>
                    </VCol>
                  </VRow>
                </VContainer>
              </VSheet>
            </VCol>
          </VRow>
          <VRow>
            <VCol>
              <VSheet class="pt-card small accent-top" color="white" rounded="lg" elevation="1">
                <VContainer class="pa-0">
                  <VRow no-gutters>
                    <VCol cols="auto" class="d-flex flex-column align-center justify-center mx-3">
                      <div class="icon-bg bg-ptblue100 d-flex flex-column align-center justify-center">
                        <VIcon icon="mdi-account-group-outline" color="primary"></VIcon>
                      </div>
                    </VCol>
                    <VCol cols="auto" class="d-flex flex-column justify-center mr-auto">
                      <p class="text-body-2">Subjects With Issues</p>
                      <p class="text-h6">80</p>
                    </VCol>
                    <VCol cols="auto">
                      <div class="d-flex flex-column">
                        <VBtn variant="text" size="small" icon="mdi-dots-vertical"></VBtn>
                        <VBtn variant="text" size="small" icon="mdi-help-circle-outline"></VBtn>
                      </div>
                    </VCol>
                  </VRow>
                </VContainer>
              </VSheet>
            </VCol>
          </VRow>
          <VRow>
            <VCol>
              <VSheet class="pt-card small accent-top" color="white" rounded="lg" elevation="1">
                <VContainer class="pa-0 fill-height">
                  <VRow no-gutters>
                    <VCol cols="auto" class="d-flex flex-column align-center justify-center mx-3">
                      <div class="icon-bg bg-ptblue100 d-flex flex-column align-center justify-center">
                        <VIcon icon="mdi-account-group-outline" color="primary"></VIcon>
                      </div>
                    </VCol>
                    <VCol cols="auto" class="d-flex flex-column justify-center mr-auto">
                      <p class="text-body-2">Alerts This Month</p>
                      <p class="text-h6">245</p>
                    </VCol>
                    <VCol cols="auto">
                      <div class="d-flex flex-column">
                        <VBtn variant="text" size="small" icon="mdi-dots-vertical"></VBtn>
                        <VBtn variant="text" size="small" icon="mdi-help-circle-outline"></VBtn>
                      </div>
                    </VCol>
                  </VRow>
                </VContainer>
              </VSheet>
            </VCol>
          </VRow>
        </VContainer>
      </VCol>
      <VCol cols="12" sm="6" lg="3">
        <VContainer class="pa-0">
          <VRow>
            <VCol>
              <VSheet class="pt-card small accent-top" color="white" rounded="lg" elevation="1">
                <VContainer class="pa-0">
                  <VRow no-gutters>
                    <VCol cols="auto" class="d-flex flex-column align-center justify-center mx-3">
                      <div class="icon-bg bg-ptblue100 d-flex flex-column align-center justify-center">
                        <VIcon icon="mdi-account-group-outline" color="primary"></VIcon>
                      </div>
                    </VCol>
                    <VCol cols="auto" class="d-flex flex-column justify-center mr-auto">
                      <p class="text-body-2">Total Population</p>
                      <p class="text-h6">45,678</p>
                    </VCol>
                    <VCol cols="auto">
                      <div class="d-flex flex-column">
                        <VBtn variant="text" size="small" icon="mdi-dots-vertical"></VBtn>
                        <VBtn variant="text" size="small" icon="mdi-help-circle-outline"></VBtn>
                      </div>
                    </VCol>
                  </VRow>
                </VContainer>
              </VSheet>
            </VCol>
          </VRow>
          <VRow>
            <VCol>
              <VSheet class="pt-card small accent-top" color="white" rounded="lg" elevation="1">
                <VContainer class="pa-0">
                  <VRow no-gutters>
                    <VCol cols="auto" class="d-flex flex-column align-center justify-center mx-3">
                      <div class="icon-bg bg-ptblue100 d-flex flex-column align-center justify-center">
                        <VIcon icon="mdi-account-group-outline" color="primary"></VIcon>
                      </div>
                    </VCol>
                    <VCol cols="auto" class="d-flex flex-column justify-center mr-auto">
                      <p class="text-body-2">Total Population</p>
                      <p class="text-h6">45,678</p>
                    </VCol>
                    <VCol cols="auto">
                      <div class="d-flex flex-column">
                        <VBtn variant="text" size="small" icon="mdi-dots-vertical"></VBtn>
                        <VBtn variant="text" size="small" icon="mdi-help-circle-outline"></VBtn>
                      </div>
                    </VCol>
                  </VRow>
                </VContainer>
              </VSheet>
            </VCol>
          </VRow>
          <VRow>
            <VCol>
              <VSheet class="pt-card small new d-flex flex-column align-center justify-center" color="transparent"
                rounded="lg">
                <VBtn variant="text" size="small" color="secondaryText" prepend-icon="mdi-plus">Add Data Set</VBtn>
              </VSheet>
            </VCol>
          </VRow>
        </VContainer>
      </VCol>
    </VRow>
    <VRow>
      <VCol>
        <VAlert color="ptroyal100" icon="mdi-card-account-details-outline">
          <div class="d-flex flex-row">
            <div><strong>You have 24,867 subjects with Special Licenses that are not being monitored.</strong> Are you
              interested in monitoring these licenses? (Your ProviderTrust represenatative will reach out to you.)
            </div>
            <div class="actions d-flex flex-row">
              <VBtn variant="text">
                No thanks
              </VBtn>
              <VBtn variant="outlined">
                Yes! I'm interested
              </VBtn>
            </div>
          </div>
        </VAlert>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
.v-sheet {
  @media (min-width: 0px) {
    &.alerts-overview {
      background: linear-gradient(180deg, #D6EBFF 50%, #FFFFFF 50%);
    }
  }

  @media (min-width: 600px) {
    &.alerts-overview {
      background: linear-gradient(90deg, #D6EBFF 50%, #FFFFFF 50%);
    }
  }


  &.accent-top {
    border-top: 8px solid #D6EBFF;
  }
}

.icon-bg {
  height: 40px;
  width: 40px;
  border-radius: 20px;
}

.pt-card {

  &.small {
    height: 100px;
  }

  &.new {
    border: 1px dashed #B6BBC6
  }
}
</style>