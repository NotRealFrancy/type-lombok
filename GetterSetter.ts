export default function GetterSetter(target: any, propertyKey: string): void {
    let value: any;

    const getter = function (this: any) {
        return value;
    };

    const setter = function (this: any, newValue: any) {
        value = newValue;
    }

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}