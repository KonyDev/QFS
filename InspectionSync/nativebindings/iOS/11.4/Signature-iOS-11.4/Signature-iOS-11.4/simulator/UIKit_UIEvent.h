#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIEvent_symbols(JSContext*);
@protocol UIEventInstanceExports<JSExport>
@property (readonly,nonatomic) UIEventSubtype subtype;
@property (readonly,nonatomic) NSSet * allTouches;
@property (readonly,nonatomic) UIEventType type;
@property (readonly,nonatomic) NSTimeInterval timestamp;
-(NSArray *) predictedTouchesForTouch: (UITouch *) touch ;
-(NSSet *) touchesForWindow: (UIWindow *) window ;
-(NSArray *) coalescedTouchesForTouch: (UITouch *) touch ;
-(NSSet *) touchesForGestureRecognizer: (UIGestureRecognizer *) gesture ;
-(NSSet *) touchesForView: (UIView *) view ;
@end
@protocol UIEventClassExports<JSExport>
@end
#pragma clang diagnostic pop