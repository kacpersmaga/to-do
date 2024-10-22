class LocalStorageManager {
    constructor(storageKey) {
        this.storageKey = storageKey;
    }

    save(data) {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
    }

    get() {
        const storedData = localStorage.getItem(this.storageKey);
        return storedData ? JSON.parse(storedData) : [];
    }


    remove() {
        localStorage.removeItem(this.storageKey);
    }

    static clearAll() {
        localStorage.clear();
    }
}

export default LocalStorageManager;