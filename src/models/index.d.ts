import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Bookmark {
  readonly id: string;
  readonly componentId: string;
  readonly categoryId: string;
  readonly moduleId?: string;
  constructor(init: ModelInit<Bookmark>);
  static copyOf(source: Bookmark, mutator: (draft: MutableModel<Bookmark>) => MutableModel<Bookmark> | void): Bookmark;
}