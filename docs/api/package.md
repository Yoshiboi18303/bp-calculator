---
sidebar_position: 2
sidebar_label: Package
---

# Package API

Here are all the methods in the package.

## [`calculate`](https://github.com/Yoshiboi18303/apex-bp-calculator/blob/main/utils/index.ts#L21)

```javascript
bpCalculator.calculate(current, goal, extraStars);
```

**Calculates how many stars are needed to get to `goal`**

### Parameters

**`current`** - The user's current level in the Battle Pass. **{`number`}** - **Must be between 1 and 110.**

**`goal`** - The user's goal level in the Battle Pass. **{`number`}** - **Must be between 1 and 110.**

**`extraStars`** - How many extra stars the user has. **{`number`}** - **Must be between 1 and 10.**

### Returns

A `number` representing the number of stars needed to get to `goal`.

### Throws

- If any of the parameters are out of bounds.

```javascript
console.log(bpCalculator.calculate(111, 110, 0)); // => Error: Value can't be greater than 110!
```

```javascript
console.log(bpCalculator.calculate(-5, 10, 0)); // => Error: Value can't be lower than 1!
```

### Error Handling

```javascript
try {
    const calculated = bpCalculator.calculate(111, 110, 0); // error will be thrown here.
    console.log(calculated);
} catch (e) { // error is caught here before it kills the program.
    console.error(e); // => Error: Value can't be greater than 110!

    // This line ensures that the error was caught. Don't use this in a real project.
    console.log("The error was not thrown, but rather logged.") // => The error was not thrown, but rather logged.
}
```

:::info

This code is the same for both JavaScript and TypeScript.

:::

:::caution Just a note

This code is for demonstration purposes, using it may cause problems especially if you have not defined `bpCalculator` as an import of the package.

:::
