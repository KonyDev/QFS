#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIFieldBehavior_symbols(JSContext*);
@protocol UIFieldBehaviorInstanceExports<JSExport>
@property (assign,nonatomic) CGVector direction;
@property (assign,nonatomic) CGFloat strength;
@property (readonly,copy,nonatomic) NSArray * items;
@property (nonatomic,strong) UIRegion * region;
@property (assign,nonatomic) CGFloat minimumRadius;
@property (assign,nonatomic) CGFloat falloff;
@property (assign,nonatomic) CGFloat animationSpeed;
@property (assign,nonatomic) CGPoint position;
@property (assign,nonatomic) CGFloat smoothness;
-(void) removeItem: (id) item ;
-(void) addItem: (id) item ;
@end
@protocol UIFieldBehaviorClassExports<JSExport>
+(id) radialGravityFieldWithPosition: (CGPoint) position ;
+(id) magneticField;
+(id) noiseFieldWithSmoothness: (CGFloat) smoothness animationSpeed: (CGFloat) speed ;
+(id) turbulenceFieldWithSmoothness: (CGFloat) smoothness animationSpeed: (CGFloat) speed ;
+(id) dragField;
+(id) velocityFieldWithVector: (CGVector) direction ;
+(id) electricField;
JSExportAs(fieldWithEvaluationBlock,
+(id) jsfieldWithEvaluationBlock: (JSValue *) block );
+(id) vortexField;
+(id) springField;
+(id) linearGravityFieldWithVector: (CGVector) direction ;
@end
#pragma clang diagnostic pop