#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIActivityViewController_symbols(JSContext*);
@protocol UIActivityViewControllerInstanceExports<JSExport>
@property (getter=getJsCompletionWithItemsHandler,setter=setJsCompletionWithItemsHandler:) JSValue* jscompletionWithItemsHandler;
@property (copy,nonatomic) NSArray * excludedActivityTypes;
@property (getter=getJsCompletionHandler,setter=setJsCompletionHandler:) JSValue* jscompletionHandler;
JSExportAs(initWithActivityItemsApplicationActivities,
-(id) jsinitWithActivityItems: (NSArray *) activityItems applicationActivities: (NSArray *) applicationActivities );
@end
@protocol UIActivityViewControllerClassExports<JSExport>
@end
#pragma clang diagnostic pop