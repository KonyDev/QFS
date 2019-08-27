#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UILocalizedIndexedCollation_symbols(JSContext*);
@protocol UILocalizedIndexedCollationInstanceExports<JSExport>
@property (readonly,nonatomic) NSArray * sectionIndexTitles;
@property (readonly,nonatomic) NSArray * sectionTitles;
JSExportAs(sectionForObjectCollationStringSelector,
-(NSInteger) jssectionForObject: (id) object collationStringSelector: (NSString *) selector );
JSExportAs(sortedArrayFromArrayCollationStringSelector,
-(NSArray *) jssortedArrayFromArray: (NSArray *) array collationStringSelector: (NSString *) selector );
-(NSInteger) sectionForSectionIndexTitleAtIndex: (NSInteger) indexTitleIndex ;
@end
@protocol UILocalizedIndexedCollationClassExports<JSExport>
+(id) currentCollation;
@end
#pragma clang diagnostic pop