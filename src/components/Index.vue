<template>
    <div>
    <v-app-bar dark dense>
    <v-app-bar-title style="width:100px">Aitest</v-app-bar-title>
    <v-tabs>
        <v-tab @click="$router.push('/jenkins')">Jenkins管理</v-tab>
        <v-tab @click="$router.push('/case')">用例管理</v-tab>
        <v-tab @click="$router.push('/task')">任务管理</v-tab>
        <v-tab @click="$router.push('/report')">报告管理</v-tab>
    </v-tabs>
    </v-app-bar>
    <router-view></router-view>
    </div>
</template>

<script>
export default {
    date(){

    }
}
</script>

<style scoped>

</style>