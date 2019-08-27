#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UISnapBehavior_symbols(JSContext*);
@protocol UISnapBehaviorInstanceExports<JSExport>
@property (assign,nonatomic) CGFloat damping;
@property (assign,nonatomic) CGPoint snapPoint;
JSExportAs(initWithItemSnapToPoint,
-(id) jsinitWithItem: (id) item snapToPoint: (CGPoint) point );
@end
@protocol UISnapBehaviorClassExports<JSExport>
@end
#pragma clang diagnostic pop