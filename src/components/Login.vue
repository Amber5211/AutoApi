<template>
    <div>
        <h1>登录</h1>
        <v-btn elevation="2" @click="signIn">点击登录</v-btn>
        <v-btn elevation="2" @click="signOut">退出登录</v-btn>
    </div>
</template>

<script>
export default {
    data(){
            return{
                username:'',
                password:'',
                guid:0
            }
        },
    methods:{
        signIn(){
            let params={
                username:this.username,
                password:this.password
            }
            this.$api.user.signIn(params).then(res=>{
                console.log(res);
            })
        },
        signOut(){
            let params={
                guid:this.guid
            }
            this.$api.user.signOut(params).then(res=>{
                console.log(res);
            })
        }
    }
}
</script>