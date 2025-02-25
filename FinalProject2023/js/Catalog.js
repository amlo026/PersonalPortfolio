class Catalog {
    constructor() {
        this.products =
            [
                { id: 1, name: "Health", image: "shanehuntarthealth.jpg", description:`Ever feel like you don't have enough energy?<br>
                 The health potion brings you back to 100%.<br>
                Now you can feel like your regular self at your very best! <br>`, price:5.99},
                { id: 2, name: "Time", image: "shanehuntarttime.jpg", description: `When you feel like you don't have enough time in the day. <br>
                The time potion gives you ample duration to get whatever you need to get done!<br>`, price:6.99},
                { id: 3, name: "Anti-Anxiety", image: "shanehuntartanxiety.jpg", description:`Big projects are due and you're having anxiety?<br>
                The anti-anxiety potion removes the anxiety, making you feel more calm, <br>
                and focusing more on tasks rather than how you are feeling. <br>
                <b>**Note: Lasts for 8 hours. Not recommended to take more than two a day.**</b> <br>`, price:7.99},
                { id: 4, name: "Motivation", image: "shanehuntartmotivation.jpg", description:`Finding it hard to complete tasks?<br>
                The motivation potion helps boost your mood!<br>
                Giving yourself the power to do anything and everything.<br>`, price:8.99},
                { id: 5, name: "Bundle", image: "shanehuntart.jpg", description:`This is the bundle pack that includes:<b><br>Health potion
                <br> Time potion<br>Anti-anxiety potion<br>Motivation potion<br></b>
                All of these to have on hand in case of emergencies. <br>`, price:25.99},
            ];
    }
    getProducts() { return this.products; }
    getItem(id) {
        for (let i = 0; i < this.products.length; i += 1) {
            if (this.products[i].id == id) return this.products[i];
        }
        return null;
    }
    findItem(name) {
        for (let i = 0; i < this.products.length; i += 1) {
            if (this.products[i].name == name) return this.products[i].id;
        }
        return -1;
    }
}