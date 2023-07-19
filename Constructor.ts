function Constructor<T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);


            const paramNames = constructor.toString()
                .match(/\(([^)]*)\)/)?.[1]
                .split(',')
                .map((param) => param.trim());

            if (paramNames && paramNames.length === args.length) {
                for (let i = 0; i < args.length; i++) {
                    const paramName = paramNames[i];
                    this[paramName] = args[i];
                }
            } else {
                throw new Error(`Expected ${paramNames?.length || 0} arguments, but ${args.length} were obtained.`);
            }
        }
    };
}