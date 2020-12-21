var temp = {
  formItemProps: {
    name: 'lossReasonCategory',
    label: '亏损原因分类',
    rules: [{ required: step === 1 }],
  },
  schemaItemProps: {
    tag: 'Select',
    getUrl: `/gm2-fms-rest/rest/selectOp/otherData?type=业务亏损原因分类`,
    mapping: {
      value: 'name',
      label: 'name',
    },
    mappingExtendKey: true,
  },
  tagProps: {
    onChange: (value: string, options: IOptionProps) => {
      setHiddenId('lossReasonCategoryId', 'id', options, form);
    },
  },
};
