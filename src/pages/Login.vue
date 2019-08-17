<template>
     <div>
         <toolbar></toolbar>
         <div class="container">
                <div class="space120"></div>

                <div class="form_wrapper">
                    <div class="form_container">
                        <h2>登录</h2>
                        <form >
                            <div class="text_box">
                                <input  v-model="username" class="text_input" type="text" name="username" placeholder="手机or邮箱" autocomplete="off"/>
                            </div>
                            <div class="text_box">
                                <input  v-model="password" class="text_input" type="password" name="password" placeholder="密码" autocomplete="off"/>
                            </div>
                            <div>
                                <div class="verify_box">
                                        <img src="../assets/img/v2ex@2x.png" @click="refresh">
                                        <div class="text_box">
                                            <input v-model="verifyCode" class="text_input" type="text" name="code" placeholder="验证码" autocomplete="off"/>
                                        </div>
                                </div>
                            </div>
                            <button class="button_box" type="button" @click="login">登录</button>
                           
                            <div class="forget">
                                <a href="#">
                                    忘记密码
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="space120"></div>
            </div>
         <bottom></bottom>
     </div>
</template>

<script>
import bottom from '@/components/Footer';
import toolbar from '@/components/Toolbar';

export default {
    name: 'Login',
    components:{
        toolbar,bottom
    },
    data:function(){
        return {
            username:"",
            password:"",
            verifyCode:""
        }
    },
    methods:{
        login:function(){
            console.log("username = "+ this.username);
            console.log("password = "+ this.password);
            console.log("verfyCode = "+ this.verifyCode);
            
            this.$router.push('/');
        },
        refresh:function(){
            console.log("refresh img ");
        }
    }
}
</script>

<style scoped>
.container{
    height: auto;
    width: auto;
    background-color: #e2e2e2;
    text-align: center;
}
.form_wrapper{
    background-color: #fff;
    height: auto;
    width: 320px;
    margin: 0 auto;
    text-align: center;
    padding: 10px 0 ;
    border-radius: 10px;
    box-shadow: 0px 4px 20px 0px rgba(0,0,0,.1);
}

.form_container{
    margin: 0 auto ;
    width: 300px;
}

.form_container h2{
    font-size: 17px;
    font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif;
    font-weight: 700;
    text-align: left;
    color:#556;
    padding-bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid  rgb(0,0,0,.22);
}

.button_box{
    text-align: center;
    margin-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    background-color: #21ba45;
    color: #fff;
    border: none;
    text-shadow: none;
    background-image: none;
    padding: 5px ;
    height: 33px;
    border-radius: 5px;
}


.text_box{
    border-radius: 4px;
    border: 1px solid #dcd2d2;
    width: 100%;
    padding: 8px;
    font-size: 13px;
    font-family: helvetica neue,luxi sans,dejavu sans,Tahoma,hiragino sans gb,microsoft yahei,sans-serif;
    box-sizing: border-box;
    margin-bottom: 15px;
    background-color: #fff;
}


.verify_box{
    display: flex;
}


.verify_box img{
    padding:1px 2px;
    height: 31px;
    width: 120px;
}

.text_input{
    width: 100%;
    color: #778087;
    background: #fff;
    margin: 0px;
    padding: 0px;
    outline: none;
    border: none;
}

.button_input{
    border: none;
}

.forget a:hover{
    text-decoration: underline;
}
.forget a{
    width: 100%;
    color: #778087;
    font-size: 13px;
    text-decoration: none;
    cursor: pointer;
}

.space120{
    height: 120px;
}
</style>