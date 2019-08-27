#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_QuartzCore_CAEmitterCell_symbols(JSContext*);
@protocol CAEmitterCellInstanceExports<JSExport, NSSecureCodingInstanceExports_, CAMediaTimingInstanceExports_>
@property () float greenSpeed;
@property () float blueSpeed;
@property () id color;
@property () float redRange;
@property () CGFloat scaleRange;
@property () float birthRate;
@property () float greenRange;
@property () CGFloat velocityRange;
@property () float lifetime;
@property (strong) id contents;
@property () CGFloat emissionRange;
@property () float blueRange;
@property () CGFloat scale;
@property (copy) NSString * magnificationFilter;
@property () CGFloat xAcceleration;
@property (copy) NSString * minificationFilter;
@property () CGFloat yAcceleration;
@property () CGFloat emissionLatitude;
@property () CGFloat contentsScale;
@property () CGFloat spinRange;
@property (copy) NSArray * emitterCells;
@property (copy) NSDictionary * style;
@property () float redSpeed;
@property () CGFloat zAcceleration;
@property () CGFloat emissionLongitude;
@property () CGFloat spin;
@property () float alphaSpeed;
@property (copy) NSString * name;
@property () float alphaRange;
@property (getter=isEnabled) BOOL enabled;
@property () float minificationFilterBias;
@property () CGRect contentsRect;
@property () float lifetimeRange;
@property () CGFloat velocity;
@property () CGFloat scaleSpeed;
-(BOOL) shouldArchiveValueForKey: (NSString *) key ;
@end
@protocol CAEmitterCellClassExports<JSExport, NSSecureCodingClassExports_, CAMediaTimingClassExports_>
+(id) emitterCell;
+(id) defaultValueForKey: (NSString *) key ;
@end
#pragma clang diagnostic pop