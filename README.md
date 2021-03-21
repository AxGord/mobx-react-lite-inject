# mobx-react-lite inject helper

Simple and convenient way to dependency injection

Observer work automatically

Example
------

Before inject:

```ts
import { observable, makeObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

class Store {
	@observable public name: string = 'username';
	public constructor() { makeObservable(this); }
}
export default observer(({message}: {message: string}) =>
	<p>Hello {store.name}! {message}</p>
);
```

After inject:

```ts
import { observable, makeObservable } from 'mobx';
import { createContext } from 'react';
import inject from 'mobx-react-lite-inject';

class Store {
	@observable public name: string = 'username';
	public constructor() { makeObservable(this); }
}
const StoreContext createContext<Store>({} as Store);

export default inject([StoreContext], ([store], {message}: {message: string}) =>
	<p>Hello {store.name}! {message}</p>
);
```

Second store:

```ts
export default inject(
	[StoreContext, SecondContext],
	([store, second], {message}: {message: string}) => ...
);
```