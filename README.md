# React Native を学習する

## expo-cli は古い
expo-cliは2023以降廃止（deprecate）された。
```
expo init アプリ名
```
これもexpo-cliが使われていため、使用できない。

```
npx create-expo-app アプリ名
```
こう書くべし。

## androidstudio エミュ起動
```
npx expo start
```
でアプリ起動。Metro Bundlerをターミナルで動かす。
JSコードをリアルタイムでビルド&転送するようになる。

ターミナルにて、
```
Logs for your project will appear below.
```
とプロンプトを受けるところを`aキー`を押すことで、AndroidStudioにアプリが転送されエミュが起動される。

## 用語
### オーバーロード
同じ関数名が複数あり、それぞれ引数の型や数が異なる状態となる仕様。
静的型付け言語の基本機能だがJSでは本来備わっていない。TSがサポートする。
```
function greet(name: string): void;
function greet(name: string, age: number): void;

function greet(name: string, age?: number) {
  console.log(`Hello ${name}!`);
  if (age) console.log(`You are ${age} years old.`);
}
```
ちなみに、オーバーライドは、複数の状態を保つことはできない。