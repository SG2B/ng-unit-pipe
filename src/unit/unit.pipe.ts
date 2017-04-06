import {Pipe, PipeTransform} from '@angular/core';

declare const math: any;

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | unit:unitFrom:unitTo
 * Example:
 *   {{ 2000000 | unit:Wh:MWh}} MWh
 *   will display: 2 MWh
 */
@Pipe({name: 'unit'})
export class UnitPipe implements PipeTransform {

  transform(value: number, unitFrom: String, unitTo?: String): any {
    if (value) {
      const metric = unitTo ? math.eval(`${value} ${unitFrom} to ${unitTo}`) : math.unit(value, unitFrom);
      return unitFrom === 'VAR' ? metric.value.im : metric.toNumber();
    } else {
      return '';
    }
  }
}
