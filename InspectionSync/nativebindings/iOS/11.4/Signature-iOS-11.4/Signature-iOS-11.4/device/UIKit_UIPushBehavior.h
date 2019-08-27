#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPushBehavior_symbols(JSContext*);
@protocol UIPushBehaviorInstanceExports<JSExport>
@property (readwrite,nonatomic) CGFloat angle;
@property (readonly,copy,nonatomic) NSArray * items;
@property (readwrite,nonatomic) CGVector pushDirection;
@property (readwrite,nonatomic) CGFloat magnitude;
@property (readonly,nonatomic) UIPushBehaviorMode mode;
@property (readwrite,nonatomic) BOOL active;
-(void) setTargetOffsetFromCenter: (UIOffset) o forItem: (id) item ;
-(void) removeItem: (id) item ;
-(UIOffset) targetOffsetFromCenterForItem: (id) item ;
-(void) setAngle: (CGFloat) angle magnitude: (CGFloat) magnitude ;
-(void) addItem: (id) item ;
JSExportAs(initWithItemsMode,
-(id) jsinitWithItems: (NSArray *) items mode: (UIPushBehaviorMode) mode );
@end
@protocol UIPushBehaviorClassExports<JSExport>
@end
#pragma clang diagnostic pop