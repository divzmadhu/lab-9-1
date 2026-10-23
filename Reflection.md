Reflection Questions

### 1. How did you handle optional props in your components?

I used optional props when a feature was not always needed. For example, in `UserProfileCard`, I used `showEmail` and `showRole` to control whether the email and role should be displayed. In `AlertBox`, I made `onClose` optional so the close button could be shown only when needed. This made my components more flexible.

### 2. What considerations did you make when designing the component interfaces?

I tried to keep the props simple and give each component the information it needed. For example, `UserProfileCard` receives a `user` object containing the name, email, and role. Similarly, `ProductDisplay` receives a `product` object containing the name, price, and description. I also included optional props for features that might not always be needed.

### 3. How did you ensure type safety across your components?

I created interfaces in types/index.ts to define the properties used by my components. For example, the User interface defines the user's id, name, email, and role, while the Product interface defines the product's id, name, price, and other details. I used these interfaces in UserProfileCard and ProductDisplay to make sure I passed the correct data. This helped me understand how TypeScript checks the types of data used in my components.

### 4. What challenges did you face when implementing component composition?

One challenge was understanding how to pass data and functions from `App.tsx` to my components. For example, I had to make sure the `onAddToCart` function in `ProductDisplay` used the correct product ID. I also learned that updating the cart state in `App.tsx` was not enough by itself; I needed to display the cart count to see the change on the screen. Working through these issues helped me understand how components work together.


## Example Usage

The `App.tsx` file demonstrates how to use the three components:

* **AlertBox:** Displays an alert message with an optional close button.
* **UserProfileCard:** Displays user information using the `user` object and optional props.
* **ProductDisplay:** Displays product information and provides an Add to Cart button.

Refer to `App.tsx` for the example implementation and `types/index.ts` for the TypeScript interfaces.
