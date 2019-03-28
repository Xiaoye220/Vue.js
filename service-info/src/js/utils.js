export default {
    getValue(obj, path = '') {
        if(Object.keys(obj).length === 0) {
            return '';
        }
        const pathArr = path.split('-');
        let result = obj;
        pathArr.forEach(path => {
            if(path !== '' && result[path] !== undefined) {
                result = result[path]
            }
        });
        return result;
    },
    setValue(obj, path = '', value = '') {
        const pathArr = path.split('-');
        const length = pathArr.length;
        let result = obj;
        for(let i = 0; i < length - 1; i++) {
            result = result[pathArr[i]];
        }
        result[pathArr[length - 1]] = value;
    },
    parseConfigObjc(rootObj, currentObj, resultObj, keyPath = '') {
        const theResultObj = resultObj !== undefined ? resultObj : {};

        if(currentObj === undefined) {
            currentObj = rootObj;
        }

        for(const key in currentObj) {
            const subObj = currentObj[key];
            if(typeof subObj !== 'object') {
                continue;
            }
            const  subKeyPath = keyPath === '' ? key : keyPath + '-' + key;
            // subObj 有属性 title、type 说明遍历到底了
            if(subObj.title !== undefined && subObj.type !== undefined) {
                theResultObj[subKeyPath] = subObj;
            } else {
                this.parseConfigObjc(rootObj, subObj, theResultObj, subKeyPath);
            }
        }

        return theResultObj;
    }
}
