import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'students.index': { paramsTuple?: []; params?: {} }
    'students.create': { paramsTuple?: []; params?: {} }
    'students.store': { paramsTuple?: []; params?: {} }
    'students.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'students.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'students.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'students.index': { paramsTuple?: []; params?: {} }
    'students.create': { paramsTuple?: []; params?: {} }
    'students.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'students.index': { paramsTuple?: []; params?: {} }
    'students.create': { paramsTuple?: []; params?: {} }
    'students.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'students.store': { paramsTuple?: []; params?: {} }
    'students.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'students.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}