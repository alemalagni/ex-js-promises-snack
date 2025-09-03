function lanciaDado() {
    return new Promise((resolve, reject) => {
        const incanstro = Math.round(Math.random() * 4)

        if (incanstro > 0) {
            return (Math.round(Math.random() * 5) + 1)
        }
    });
}
