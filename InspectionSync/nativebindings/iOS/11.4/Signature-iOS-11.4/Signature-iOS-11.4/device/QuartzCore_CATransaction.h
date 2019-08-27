#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_QuartzCore_CATransaction_symbols(JSContext*);
@protocol CATransactionInstanceExports<JSExport>
@end
@protocol CATransactionClassExports<JSExport>
+(void) begin;
+(id) valueForKey: (NSString *) key ;
+(void (^)(void)) completionBlock;
+(void) lock;
+(void) flush;
+(void) setValue: (id) anObject forKey: (NSString *) key ;
JSExportAs(setCompletionBlock,
+(void) jssetCompletionBlock: (JSValue *) block );
+(void) setAnimationTimingFunction: (CAMediaTimingFunction *) function ;
+(void) unlock;
+(BOOL) disableActions;
+(CFTimeInterval) animationDuration;
+(void) commit;
+(void) setDisableActions: (BOOL) flag ;
+(void) setAnimationDuration: (CFTimeInterval) dur ;
+(CAMediaTimingFunction *) animationTimingFunction;
@end
#pragma clang diagnostic pop