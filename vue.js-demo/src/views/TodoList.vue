<template>
    <div class="todoList">
        <h1>{{title}}</h1>
        <label>
            <input v-model="inputValue" @keyup.enter="addNew"/>
        </label>
        <ul>
            <li v-for="item in items" v-text="item.label" :class="{finished: item.isFinished}" @click="toggleFinish(item)"></li>
        </ul>
    </div>
</template>

<script>
    import Storage from '@/js/storage'

    export default {
        name: "TodoList",
        data() {
            return {
                title: "todo list",
                items: Storage.getItem(),
                inputValue: ""
            }
        },
        methods: {
            toggleFinish: function(item) {
                item.isFinished = !item.isFinished;
            },
            addNew: function () {
                this.items.push({label: this.inputValue, isFinished: false});
                this.inputValue = "";
            }
        },
        watch: {
            items: {
                handler: function (items) {
                    Storage.getItem();
                    Storage.setItem(items);
                },
                deep: true
            }
        }
    }
</script>

<style scoped>
    .todoList {
        width: 200px;
        margin: 0 auto;
    }
    h1, h2 {
        font-weight: normal;
    }
    ul {
        text-align: left;
    }
    .finished {
        text-decoration-line: underline;
        color: #42b983;
    }
</style>
