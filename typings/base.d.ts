interface ClassCommonConfig extends pick<lunisolar.ConfigType, 'lang'> {
  [props: string]: any
}

type YMDH = 'year' | 'month' | 'day' | 'hour'
