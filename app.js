const { createApp } = Vue;

createApp({
    data() {
        return {
            logoImage: './img/logo.svg',
            newTask: '',
            inputError: false,
            tasks: [
                {
                    text: 'Fare i compiti',
                    done: false
                },{
                    text: 'Fare la spesa',
                    done: true
                },{
                    text: 'Fare il bucato',
                    done: false
                }
            ]
        }
    },
    methods: {
        //aggiungi task all'inizio
        addTask() {
            if (this.newTask !== '' && this.newTask.length >= 5) {
                this.tasks.unshift(this.newTask);
                this.inputError = false;
            }
            else {
                this.inputError = true;
            }
            //svuoto il valore di newTask
            this.newTask = '';
        },
        //rimuovi task specifico da index
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        
    }
}).mount("#app");