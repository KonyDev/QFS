#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UILongPressGestureRecognizer_symbols(JSContext*);
@protocol UILongPressGestureRecognizerInstanceExports<JSExport>
@property (nonatomic) CGFloat allowableMovement;
@property (nonatomic) NSUInteger numberOfTapsRequired;
@property (nonatomic) NSUInteger numberOfTouchesRequired;
@property (nonatomic) CFTimeInterval minimumPressDuration;
@end
@protocol UILongPressGestureRecognizerClassExports<JSExport>
@end
#pragma clang diagnostic pop