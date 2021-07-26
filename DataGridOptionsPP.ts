export interface IdataGridSettingsPP{
  new(dataSorce:object[]): IdataGridSettingsPP;
  options: object;
  getOptions(): object[];
  addOption(optionName: string, optionValue: any): void;
  removeOption(optionName: string): void;
  changeOption(optionName: string, newOptionValue: any): void;
  changeAllOptions(newOptions: object[]): void;
  addNewCssClass(newClassName: string): void;
}


