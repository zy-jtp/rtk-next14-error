
## Unhandled Runtime Error | Error: [Immer] 'current' expects a draft, got: 

```
"next@14.0.2"
@reduxjs/toolkit@2.2.4
react-redux@9.1.2
```

![Screenshot 2024-05-16 at 12 52 38 AM](https://github.com/zy-jtp/rtk-next14-error/assets/94405955/ba9c490f-6ecd-458c-85d9-39a986263c93)

## Setup
Run
```bash
git clone git@github.com:zy-jtp/rtk-next14-error.git
cd rtk-next14-error
yarn
yarn dev
```

### How to repro
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
- If you land on `/` click the `Go to error demo` link or got to [http://localhost:3000/error-demo](http://localhost:3000/error-demo)
- Clicking on any button dispatches an upsert in the `modalsSlice` and should show the error, also prints it in the console.
