<template>
    <div>
        <div id="screen" v-bind:class="waiting" @click="onClickScreen">

        </div>
        <div>평균 시간: {{}}</div>
        <button @Click="onReset">리셋</button>
    </div>
</template>
<script>

export default {
    data() {
        return {
            result: [],
            state: 'waiting',
            message: '클릭해서 시작하세요.'
        }
    },
    methods: {
        onReset(){
            console.log("reset")
        },
        onClickScreen(){
            if(this.state === 'waiting'){
                this.state = 'ready'
            }else if(this.state === 'ready'){

            }else if(this.state === 'now'){
                
            }
        }
    }
}
</script>
<style scoped>
    #screen {
        background-color: yellow;
        width: 400px;
        height: 400px;
    }
    #screen.waiting {
        background-color: green;
    }
    #screen.ready {
        background-color: red;
        color: white;
    }
    #screen.now {
        background-color: blue;
    }


</style>