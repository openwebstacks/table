import type { Ref } from 'vue'

interface TableStore {
  source?: string
  type?: string | boolean
  useTitle?: string | boolean
  useSubTitle?: string | boolean
  title?: string | boolean
  subTitle?: string | boolean
  columns?: string | string[]
  searchable?: string | boolean
  query?: string
  sortable?: string | boolean
  sorts?: string | string[]
  filterable?: string | boolean
  filters?: string | string[]
  actionable?: string | boolean
  actions?: string | string[]
  perPage?: string | number
  // stickyHeader?: string | boolean
  // stickyFooter?: string | boolean
}

const initialData: TableStore = {
  source: '',
  type: '',
  title: false,
  subTitle: false,
  columns: [],
  searchable: false,
  query: '',
  sortable: false,
  sorts: [],
  filterable: false,
  filters: [],
  actionable: false,
  actions: [],
  perPage: 20,
  // TODO: stickyHeader?: string | boolean
  // TODO: stickyFooter?: string | boolean
}

export const tableStore: Ref<TableStore> = useStorage('table-store', initialData)