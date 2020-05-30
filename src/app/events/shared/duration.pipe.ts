import {Pipe , PipeTransform} from '@angular/core'
@Pipe({
    name:"duration"
})

export class DurationPipe implements PipeTransform{
    transform(value : Number):string{
        switch (value){
            case 1 : return 'Half hour'
            case 1 : return 'one hour'
            case 1 : return 'two hour'
            case 1 : return 'three hour'
            default:return value.toString()
        }
    }
}