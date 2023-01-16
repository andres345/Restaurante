<template>
  <Dashboard/>
    <CRow>
    <CCol :xs="4">
      <CWidgetStatsB
        class="mb-3"
        :progress="{ color: 'success', value: 75}"
      >
        <template #text>Widget helper text</template>
        <template #title>Widget title</template>
        <template #value>89.9%</template>
      </CWidgetStatsB>
    </CCol>
    <CCol :xs="4">
      <CWidgetStatsB
        class="mb-3"
        :progress="{ color: 'info', value: 75}"
        text="Widget helper text"
        title="Widget title"
        value="12.124"/>
    </CCol>
    <CCol :xs="4">
      <CWidgetStatsB
        class="mb-3"
        :progress="{ color: 'warning', value: 75}"
        text="Widget helper text"
        title="Widget title"
        value="$98.111,00"/>
    </CCol>
  </CRow>
</template>

<script>
import { CRow, CCol, CWidgetStatsB } from '@coreui/vue';
import Dashboard from '../DashboardAdmin.vue';

export default{
    components: {
      Dashboard,
      CRow,
      CCol,
      CWidgetStatsB,
    },
}
</script>
