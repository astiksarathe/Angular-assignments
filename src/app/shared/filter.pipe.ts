import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(user: Array<any>, searchValue: string): any {
    if (!user || !searchValue) return user;
    return user.filter((obj: any) => {
      return (
        obj?.name
          ?.toLocaleLowerCase()
          .includes(searchValue?.toLocaleLowerCase()) ||
        obj?.price
          ?.toLocaleLowerCase()
          .includes(searchValue?.toLocaleLowerCase())
      );
    });
  }
}
