import { Context, ReactElement, useContext } from 'react';
import { observer } from 'mobx-react-lite';

const inject = <T1, T2, T3, T4, T5, T6, T7, T extends [T1, T2, T3, T4, T5, T6, T7], P>(
	context: [c1: Context<T1>, c2?: Context<T2>, c3?: Context<T3>, c4?: Context<T4>, c5?: Context<T5>, c6?: Context<T6>, c7?: Context<T7>],
	f: (store: T, props: P) => ReactElement) =>
	observer((props: P) => f(context.map(c => useContext(c as Context<any>)) as T, props));

export default inject;