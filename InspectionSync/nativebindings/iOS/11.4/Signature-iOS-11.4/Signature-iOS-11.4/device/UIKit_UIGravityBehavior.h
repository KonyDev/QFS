#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIGravityBehavior_symbols(JSContext*);
@protocol UIGravityBehaviorInstanceExports<JSExport>
@property (readonly,copy,nonatomic) NSArray * items;
@property (readwrite,nonatomic) CGFloat magnitude;
@property (readwrite,nonatomic) CGFloat angle;
@property (readwrite,nonatomic) CGVector gravityDirection;
-(void) removeItem: (id) item ;
-(void) setAngle: (CGFloat) angle magnitude: (CGFloat) magnitude ;
JSExportAs(initWithItems,
-(id) jsinitWithItems: (NSArray *) items );
-(void) addItem: (id) item ;
@end
@protocol UIGravityBehaviorClassExports<JSExport>
@end
#pragma clang diagnostic pop