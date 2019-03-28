
const listKey = "listKey";

export default {
    getItem: function () {
        return JSON.parse(window.localStorage.getItem(listKey) || '[]');
    },
    setItem: function (items) {
        window.localStorage.setItem(listKey, JSON.stringify(items));
    }
}
