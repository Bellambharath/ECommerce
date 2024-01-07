import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[],filtersearch:string,propname:string): any[] 
  {
    const result:any=[];
    if(!value || filtersearch=='' || propname == '')
    {
      return value;
    }
    value.forEach((a:any)=>
    {
      
      console.log(filtersearch.toLocaleLowerCase())
      console.log("###############################")
      if(a[propname].trim().toLowerCase().includes(filtersearch.toLocaleLowerCase()))
      {
        result.push(a);
      }

    });
    return result;
  }

}
