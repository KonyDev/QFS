#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_NSIndexPath_UIKitAdditions_symbols(JSContext*);
@protocol NSIndexPathUIKitAdditionsCategoryInstanceExports<JSExport>
@property (readonly,nonatomic) NSInteger item;
@property (readonly,nonatomic) NSInteger section;
@property (readonly,nonatomic) NSInteger row;
@end
@protocol NSIndexPathUIKitAdditionsCategoryClassExports<JSExport>
+(id) indexPathForItem: (NSInteger) item inSection: (NSInteger) section ;
+(id) indexPathForRow: (NSInteger) row inSection: (NSInteger) section ;
@end
#pragma clang diagnostic pop