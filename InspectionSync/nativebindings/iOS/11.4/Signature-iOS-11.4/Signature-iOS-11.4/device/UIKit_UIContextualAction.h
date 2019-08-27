#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIContextualAction_symbols(JSContext*);
@protocol UIContextualActionInstanceExports<JSExport>
@property (readonly,nonatomic) UIContextualActionStyle style;
@property (readonly,getter=getJsHandler) JSValue* jshandler;
@property (copy,nonatomic) UIImage * image;
@property (copy,nonatomic) UIColor * backgroundColor;
@property (copy,nonatomic) NSString * title;
@end
@protocol UIContextualActionClassExports<JSExport>
JSExportAs(contextualActionWithStyleTitleHandler,
+(id) jscontextualActionWithStyle: (UIContextualActionStyle) style title: (NSString *) title handler: (JSValue *) handler );
@end
#pragma clang diagnostic pop