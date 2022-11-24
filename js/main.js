const {createApp}= Vue;

const app = createApp({
    data () {
        return{
            compitiList: [
                {
                    text: "Task 1",
                    done: false
                },
                {
                    text: "Task 2",
                    done: false
                },
                {
                    text: "Task 3",
                    done: false
                }
            ],
            nuovaTaskData: {
                text:"",
            },
        };
    },
    methods: {
        onFormSubmit(){
            this.compitiList.push({
                text: this.nuovaTaskData.text,
                done: false
            });
        }
    }
}).mount('#app')