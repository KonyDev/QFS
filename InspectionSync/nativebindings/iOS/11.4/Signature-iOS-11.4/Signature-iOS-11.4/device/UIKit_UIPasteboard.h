#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPasteboard_symbols(JSContext*);
@protocol UIPasteboardInstanceExports<JSExport>
@property (readonly,nonatomic) BOOL hasStrings;
@property (readonly,nonatomic) UIPasteboardName name;
@property (readonly,nonatomic) NSInteger changeCount;
@property (copy,nonatomic) NSURL * URL;
@property (copy,nonatomic) NSArray * items;
@property (copy,nonatomic) UIImage * image;
@property (getter=isPersistent,readonly,nonatomic) BOOL persistent;
@property (readonly,nonatomic) BOOL hasURLs;
@property (copy,nonatomic) NSArray * itemProviders;
@property (copy,nonatomic) UIColor * color;
@property (copy,nonatomic) NSArray * colors;
@property (readonly,nonatomic) BOOL hasColors;
@property (readonly,nonatomic) NSArray * pasteboardTypes;
@property (copy,nonatomic) NSArray * URLs;
@property (copy,nonatomic) NSArray * images;
@property (readonly,nonatomic) BOOL hasImages;
@property (copy,nonatomic) NSArray * strings;
@property (copy,nonatomic) NSString * string;
@property (readonly,nonatomic) NSInteger numberOfItems;
-(NSArray *) dataForPasteboardType: (NSString *) pasteboardType inItemSet: (NSIndexSet *) itemSet ;
-(void) setData: (NSData *) data forPasteboardType: (NSString *) pasteboardType ;
-(NSIndexSet *) itemSetWithPasteboardTypes: (NSArray *) pasteboardTypes ;
-(NSArray *) pasteboardTypesForItemSet: (NSIndexSet *) itemSet ;
-(void) setPersistent: (BOOL) persistent ;
-(void) setValue: (id) value forPasteboardType: (NSString *) pasteboardType ;
-(void) setObjects: (NSArray *) objects ;
-(void) addItems: (NSArray *) items ;
-(NSArray *) valuesForPasteboardType: (NSString *) pasteboardType inItemSet: (NSIndexSet *) itemSet ;
-(BOOL) containsPasteboardTypes: (NSArray *) pasteboardTypes ;
-(void) setItems: (NSArray *) items options: (NSDictionary *) options ;
-(id) valueForPasteboardType: (NSString *) pasteboardType ;
-(void) setItemProviders: (NSArray *) itemProviders localOnly: (BOOL) localOnly expirationDate: (NSDate *) expirationDate ;
-(NSData *) dataForPasteboardType: (NSString *) pasteboardType ;
-(void) setObjects: (NSArray *) objects localOnly: (BOOL) localOnly expirationDate: (NSDate *) expirationDate ;
-(BOOL) containsPasteboardTypes: (NSArray *) pasteboardTypes inItemSet: (NSIndexSet *) itemSet ;
@end
@protocol UIPasteboardClassExports<JSExport>
+(UIPasteboard *) pasteboardWithName: (UIPasteboardName) pasteboardName create: (BOOL) create ;
+(UIPasteboard *) generalPasteboard;
+(void) removePasteboardWithName: (UIPasteboardName) pasteboardName ;
+(UIPasteboard *) pasteboardWithUniqueName;
@end
#pragma clang diagnostic pop