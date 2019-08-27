#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UINib_symbols(JSContext*);
@protocol UINibInstanceExports<JSExport>
-(NSArray *) instantiateWithOwner: (id) ownerOrNil options: (NSDictionary *) optionsOrNil ;
@end
@protocol UINibClassExports<JSExport>
+(UINib *) nibWithNibName: (NSString *) name bundle: (NSBundle *) bundleOrNil ;
+(UINib *) nibWithData: (NSData *) data bundle: (NSBundle *) bundleOrNil ;
@end
#pragma clang diagnostic pop