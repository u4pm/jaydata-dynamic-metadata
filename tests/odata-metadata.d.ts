/*//////////////////////////////////////////////////////////////////////////////////////
//////     Autogenerated by JaySvcUtil http://JayData.org for more info        /////////
//////                      OData  V4  TypeScript                              /////////
//////////////////////////////////////////////////////////////////////////////////////*/

declare module $data{
    class Geography{}
    class GeographyLineString{}
    class GeographyPolygon{}
    class GeographyMultiPoint{}
    class GeographyMultiPolygon{}
    class GeographyMultiLineString{}
    class GeographyCollection{}

    class Geometry{}
    class GeometryLineString{}
    class GeometryPolygon{}
    class GeometryMultiPoint{}
    class GeometryMultiPolygon{}
    class GeometryMultiLineString{}
    class GeometryCollection{}

    const enum EntityState{
        Detached = 0,
        Unchanged = 10,
        Added = 20,
        Modified = 30,
        Deleted = 40
    }

    interface MemberDefinition{
        name: string;
        type: any;
        dataType: any;
        elementType: any;
        originalType: any;
        kind: string;
        classMember: boolean;
        set: (value:any) => void;
        get: () => any;
        value: any;
        initialValue: any;
        method: Function;
        enumerable: boolean;
        configurable: boolean;
        key: boolean;
        computed: boolean;
        storeOnObject: boolean;
        monitorChanges: boolean;
    }

    interface Event{
        attach(eventHandler: (sender: any, event: any) => void ): void;
        detach(eventHandler: () => void ): void;
        fire(e: any, sender: any): void;
    }

    class Base<T>{
        constructor();
        getType: () => typeof Base;

        static addProperty(name:string, getterOrType:string | Function, setterOrGetter?:Function, setter?:Function): void;
        static addMember(name:string, definition:any, isClassMember?:boolean): void;
        static describeField(name:string, definition:any): void;

        static hasMetadata(key:string, property?:string): boolean;
        static getAllMetadata(property?:string): any;
        static getMetadata(key:string, property?:string): any;
        static setMetadata(key:string, value:any, property?:string): void;
    }

    class Enum extends Base<Enum>{
        static extend(name:string, instanceDefinition:any, classDefinition?:any): Base<Enum>;
    }
    function createEnum(name:string, enumType:any, enumDefinition?:any): Base<Enum>;

    class Entity extends Base<Entity>{
        static extend(name:string, instanceDefinition:any, classDefinition?:any): Base<Entity>;

        entityState: EntityState;
        changedProperties: MemberDefinition[];

        propertyChanging: Event;
        propertyChanged: Event;
        propertyValidationError: Event;
        isValid: boolean;
    }

    class EntitySet<Ttype extends typeof Entity, T extends Entity> extends Queryable<T>{
        add(item: T): T;
        add(initData: {}): T;
        attach(item: T): void;
        attach(item: {}): void;
        attachOrGet(item: T): T;
        attachOrGet(item: {}): T;
        detach(item: T): void;
        detach(item: {}): void;
        remove(item: T): void;
        remove(item: {}): void;
        elementType: Ttype;
    }

    class EntityContext extends Base<EntityContext>{
        constructor(config?: any);
        onReady(): Promise<EntityContext>;
        saveChanges(): Promise<number>;
        stateManager: {reset: Function};
        static extend(name:string, instanceDefinition:any, classDefinition?:any): Base<EntityContext>;
    }

    class Queryable<T extends Entity | Edm.Primitive>{
        filter(predicate: (it: T) => boolean, thisArg?: any): Queryable<T>;
        filter(predicate: string, thisArg?: any): Queryable<T>;
        map(projection: (it: T) => any): Queryable<any>;
        map(projection: string): Queryable<any>;
        orderBy(predicate: (it: T) => void): Queryable<T>;
        orderBy(predicate: string): Queryable<T>;
        orderByDescending(predicate: (it: T) => void): Queryable<T>;
        orderByDescending(predicate: string): Queryable<T>;
        include(selector: string): Queryable<T>;
        skip(amount: number): Queryable<T>;
        take(amount: number): Queryable<T>;
        forEach(handler: (it: T) => void): Promise<T>;
        length(): Promise<number>;
        toArray(): Promise<T[]>;
        single(predicate: (it: T) => boolean, params?: any): Promise<T>;
        single(predicate: string, params?: any): Promise<T>;
        first(predicate?: (it: T) => boolean, params?: any): Promise<T>;
        first(predicate?: string, params?: any): Promise<T>;
        removeAll(): Promise<number>;
        count(): Promise<number>;
    }
    class ServiceAction{}
    class ServiceFunction{}

    function implementation(name:string): typeof Base;
}
export {$data as $data}

declare type JSDate = Date;

declare module Edm {
    type Boolean = boolean;
    type Binary = Uint8Array;
    type DateTime = JSDate;
    type DateTimeOffset = JSDate;
    type Duration = string;
    type TimeOfDay = string;
    type Date = string;
    type Time = string;
    type Decimal = string;
    type Single = number;
    type Float = number;
    type Double = number;
    type Guid = string;
    type Int16 = number;
    type Int32 = number;
    type Int64 = string;
    type Byte = number;
    type SByte = number;
    type String = string;
    type GeographyPoint = $data.Geography;
    type GeographyLineString = $data.GeographyLineString;
    type GeographyPolygon = $data.GeographyPolygon;
    type GeographyMultiPoint = $data.GeographyMultiPoint;
    type GeographyMultiPolygon = $data.GeographyMultiPolygon;
    type GeographyMultiLineString = $data.GeographyMultiLineString;
    type GeographyCollection = $data.GeographyCollection;
    type GeometryPoint = $data.Geometry;
    type GeometryLineString = $data.GeometryLineString;
    type GeometryPolygon = $data.GeometryPolygon;
    type GeometryMultiPoint = $data.GeometryMultiPoint;
    type GeometryMultiPolygon = $data.GeometryMultiPolygon;
    type GeometryMultiLineString = $data.GeometryMultiLineString;
    type GeometryCollection = $data.GeometryCollection;
    type Primitive =
        Boolean | Binary | Guid | DateTime | DateTimeOffset | Duration | TimeOfDay | Date | Time |
        Decimal | Single | Float | Double | Int16 | Int32 | Int64 | Byte | SByte | String |
        GeographyPoint | GeographyLineString | GeographyPolygon | GeographyMultiPoint | GeographyMultiLineString | GeographyMultiPolygon | GeographyCollection |
        GeometryPoint | GeometryLineString | GeometryPolygon | GeometryMultiPoint | GeometryMultiLineString | GeometryMultiPolygon | GeometryCollection;
}
export {Edm as Edm}

declare module JayData.Test.CommonItems.Entities {

    export class TestItemType extends $data.Entity {
        constructor();
        constructor(initData: { Id?: Edm.Int32; blob?: Edm.Binary; b0?: Edm.Boolean; b1?: Edm.Byte; d0?: Edm.DateTimeOffset; de0?: Edm.Decimal; n0?: Edm.Double; si0?: Edm.Single; g0?: Edm.Guid; i16?: Edm.Int16; i0?: Edm.Int32; i64?: Edm.Int64; s0?: Edm.String });

        Id: Edm.Int32;
        blob: Edm.Binary;
        b0: Edm.Boolean;
        b1: Edm.Byte;
        d0: Edm.DateTimeOffset;
        de0: Edm.Decimal;
        n0: Edm.Double;
        si0: Edm.Single;
        g0: Edm.Guid;
        i16: Edm.Int16;
        i0: Edm.Int32;
        i64: Edm.Int64;
        s0: Edm.String;
    }

    export class TestItemGroup extends $data.Entity {
        constructor();
        constructor(initData: { Id?: Edm.Guid; Name?: Edm.String; Items?: JayData.Test.CommonItems.Entities.TestItemGuid[] });

        Id: Edm.Guid;
        Name: Edm.String;
        Items: JayData.Test.CommonItems.Entities.TestItemGuid[];
    }

    export class TestItemGuid extends $data.Entity {
        constructor();
        constructor(initData: { Id?: Edm.Guid; i0?: Edm.Int32; b0?: Edm.Boolean; s0?: Edm.String; time?: Edm.TimeOfDay; date?: Edm.Date; t?: Edm.DateTimeOffset; dur?: Edm.Duration; dtOffset?: Edm.DateTimeOffset; lng?: Edm.Int64; dec?: Edm.Decimal; flt?: Edm.Single; emails?: Edm.String[]; Group?: JayData.Test.CommonItems.Entities.TestItemGroup; GetDisplayText?: $data.ServiceAction });

        Id: Edm.Guid;
        i0: Edm.Int32;
        b0: Edm.Boolean;
        s0: Edm.String;
        time: Edm.TimeOfDay;
        date: Edm.Date;
        t: Edm.DateTimeOffset;
        dur: Edm.Duration;
        dtOffset: Edm.DateTimeOffset;
        lng: Edm.Int64;
        dec: Edm.Decimal;
        flt: Edm.Single;
        emails: Edm.String[];
        Group: JayData.Test.CommonItems.Entities.TestItemGroup;
        GetDisplayText: { (): Promise<Edm.String>; };
    }

    export class TagConnection extends $data.Entity {
        constructor();
        constructor(initData: { Id?: Edm.Int32; Article?: JayData.Test.CommonItems.Entities.Article; Tag?: JayData.Test.CommonItems.Entities.Tag });

        Id: Edm.Int32;
        Article: JayData.Test.CommonItems.Entities.Article;
        Tag: JayData.Test.CommonItems.Entities.Tag;
    }

    export class TestItem extends $data.Entity {
        constructor();
        constructor(initData: { Id?: Edm.Int32; i0?: Edm.Int32; b0?: Edm.Boolean; s0?: Edm.String; blob?: Edm.Byte[]; n0?: Edm.Double; d0?: Edm.DateTimeOffset; g0?: Edm.Guid; l0?: Edm.Int64; de0?: Edm.Decimal; b1?: Edm.Byte });

        Id: Edm.Int32;
        i0: Edm.Int32;
        b0: Edm.Boolean;
        s0: Edm.String;
        blob: Edm.Byte[];
        n0: Edm.Double;
        d0: Edm.DateTimeOffset;
        g0: Edm.Guid;
        l0: Edm.Int64;
        de0: Edm.Decimal;
        b1: Edm.Byte;
    }

    export class Tag extends $data.Entity {
        constructor();
        constructor(initData: { Id?: Edm.Int32; Title?: Edm.String; Articles?: JayData.Test.CommonItems.Entities.TagConnection[] });

        Id: Edm.Int32;
        Title: Edm.String;
        Articles: JayData.Test.CommonItems.Entities.TagConnection[];
    }

    export class Category extends JayData.Test.CommonItems.Entities.MyTClass {
        constructor();
        constructor(initData: { RowVersion?: Edm.Binary; Subtitle?: Edm.String; Description?: Edm.String; Articles?: JayData.Test.CommonItems.Entities.Article[] });

        RowVersion: Edm.Binary;
        Subtitle: Edm.String;
        Description: Edm.String;
        Articles: JayData.Test.CommonItems.Entities.Article[];
    }

    export class UserProfile extends $data.Entity {
        constructor();
        constructor(initData: { Id?: Edm.Int32; FullName?: Edm.String; Bio?: Edm.String; Avatar?: Edm.Binary; Birthday?: Edm.DateTimeOffset; Location?: JayData.Test.CommonItems.Entities.Location; User?: JayData.Test.CommonItems.Entities.User });

        Id: Edm.Int32;
        FullName: Edm.String;
        Bio: Edm.String;
        Avatar: Edm.Binary;
        Birthday: Edm.DateTimeOffset;
        Location: JayData.Test.CommonItems.Entities.Location;
        User: JayData.Test.CommonItems.Entities.User;
    }

    export class Article extends JayData.Test.CommonItems.Entities.MyTClass {
        constructor();
        constructor(initData: { RowVersion?: Edm.Binary; Lead?: Edm.String; Body?: Edm.String; CreateDate?: Edm.DateTimeOffset; Thumbnail_LowRes?: Edm.Binary; Thumbnail_HighRes?: Edm.Binary; Category?: JayData.Test.CommonItems.Entities.Category; Reviewer?: JayData.Test.CommonItems.Entities.User; Author?: JayData.Test.CommonItems.Entities.User; Tags?: JayData.Test.CommonItems.Entities.TagConnection[] });

        RowVersion: Edm.Binary;
        Lead: Edm.String;
        Body: Edm.String;
        CreateDate: Edm.DateTimeOffset;
        Thumbnail_LowRes: Edm.Binary;
        Thumbnail_HighRes: Edm.Binary;
        Category: JayData.Test.CommonItems.Entities.Category;
        Reviewer: JayData.Test.CommonItems.Entities.User;
        Author: JayData.Test.CommonItems.Entities.User;
        Tags: JayData.Test.CommonItems.Entities.TagConnection[];
    }

    export class MyTClass extends $data.Entity {
        constructor();
        constructor(initData: { Id?: Edm.Int32; Title?: Edm.String });

        Id: Edm.Int32;
        Title: Edm.String;
    }

    export class User extends $data.Entity {
        constructor();
        constructor(initData: { Id?: Edm.Int32; LoginName?: Edm.String; Email?: Edm.String; UserType?: JayData.Test.CommonItems.Entities.UserType; RevieweredArticles?: JayData.Test.CommonItems.Entities.Article[]; AuthoredArticles?: JayData.Test.CommonItems.Entities.Article[]; Profile?: JayData.Test.CommonItems.Entities.UserProfile });

        Id: Edm.Int32;
        LoginName: Edm.String;
        Email: Edm.String;
        UserType: JayData.Test.CommonItems.Entities.UserType;
        RevieweredArticles: JayData.Test.CommonItems.Entities.Article[];
        AuthoredArticles: JayData.Test.CommonItems.Entities.Article[];
        Profile: JayData.Test.CommonItems.Entities.UserProfile;
    }

    export class Location extends $data.Entity {
        constructor();
        constructor(initData: { Address?: Edm.String; City?: Edm.String; Zip?: Edm.Int32; Country?: Edm.String });

        Address: Edm.String;
        City: Edm.String;
        Zip: Edm.Int32;
        Country: Edm.String;
    }

    export enum UserType {
        Admin,
        Customer,
        Guest,
    }

}

declare module Default {

    export class Container extends $data.EntityContext {
        onReady(): Promise<Container>;

        Users: $data.EntitySet<typeof JayData.Test.CommonItems.Entities.User, JayData.Test.CommonItems.Entities.User>;
        Articles: $data.EntitySet<typeof JayData.Test.CommonItems.Entities.Article, JayData.Test.CommonItems.Entities.Article>;
        UserProfiles: $data.EntitySet<typeof JayData.Test.CommonItems.Entities.UserProfile, JayData.Test.CommonItems.Entities.UserProfile>;
        Categories: $data.EntitySet<typeof JayData.Test.CommonItems.Entities.Category, JayData.Test.CommonItems.Entities.Category>;
        Tags: $data.EntitySet<typeof JayData.Test.CommonItems.Entities.Tag, JayData.Test.CommonItems.Entities.Tag>;
        TestTable: $data.EntitySet<typeof JayData.Test.CommonItems.Entities.TestItem, JayData.Test.CommonItems.Entities.TestItem>;
        TagConnections: $data.EntitySet<typeof JayData.Test.CommonItems.Entities.TagConnection, JayData.Test.CommonItems.Entities.TagConnection>;
        TestTable2: TestTable2;
        TestItemGroups: $data.EntitySet<typeof JayData.Test.CommonItems.Entities.TestItemGroup, JayData.Test.CommonItems.Entities.TestItemGroup>;
        TestItemTypes: $data.EntitySet<typeof JayData.Test.CommonItems.Entities.TestItemType, JayData.Test.CommonItems.Entities.TestItemType>;
        SAction1: { (number: Edm.Int32): Promise<Edm.String>; };
        SAction2: { (count: Edm.Int32): $data.Queryable<JayData.Test.CommonItems.Entities.Article>; };
        SFunction1: { (number: Edm.Int32): $data.Queryable<Edm.String>; };
        SFunction2: { (number: Edm.Int32): Promise<Edm.String>; };
    }
    export class TestTable2 extends $data.EntitySet<typeof JayData.Test.CommonItems.Entities.TestItemGuid, JayData.Test.CommonItems.Entities.TestItemGuid> {
        GetTitles: { (count: Edm.Int32): $data.Queryable<Edm.String>; };
    }


}

export {JayData as JayData}

export {Default as Default}

export var type: typeof Default.Container;
export var factory: (config:any) => Default.Container;