#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIStoryboard_symbols(JSContext*);
@protocol UIStoryboardInstanceExports<JSExport>
-(__kindof UIViewController *) instantiateViewControllerWithIdentifier: (NSString *) identifier ;
-(__kindof UIViewController *) instantiateInitialViewController;
@end
@protocol UIStoryboardClassExports<JSExport>
+(UIStoryboard *) storyboardWithName: (NSString *) name bundle: (NSBundle *) storyboardBundleOrNil ;
@end
#pragma clang diagnostic pop