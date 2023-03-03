import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'maxChar'
})
export class MaxCharPipe implements PipeTransform {

    transform(value: string, ...args: unknown[]): unknown {
        const targetBegin = value.substring(0, 5).toLocaleUpperCase();

        value = value.replace(value.substring(0, 5), targetBegin);

        return value;
    }

}
