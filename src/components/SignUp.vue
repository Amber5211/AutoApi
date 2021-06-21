<template>
    <div class="sign-up">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>注册新用户</h1>
        <v-text-field v-model="username" label="用户名"></v-text-field>
        <v-text-field v-model="password" label="密码" type="password"></v-text-field>
        <v-text-field v-model="email" label="邮箱" type="email"></v-text-field>
        <v-btn color="primary" @click="signUp()">注册</v-btn>
        <v-btn color="primary" text @click="refundLogin">返回登录页面</v-btn>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username:'',
            password:'',
            email:''
        }
    },
    methods:{
        signUp(){
            let params={
                userName:this.username,
                password:this.password,
                email:this.email
            }
            this.$api.user.signUp(params)
            .then(res=>{
                console.log(res);
                this.$router.push({
                    name:'Login'
                })
            })
        },
        refundLogin(){
            this.$router.push({
                name:'Login'
            })
        }
    }
}
</script>

<style scoped>
    .sign-up {
        width: 400px;
        text-align: center;
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top:10%;
    };
</style>